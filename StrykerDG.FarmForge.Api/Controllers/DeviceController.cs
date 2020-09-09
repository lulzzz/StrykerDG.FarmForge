﻿using Akka.Actor;
using Microsoft.AspNetCore.Mvc;
using StrykerDG.FarmForge.Actors.Devices.Messages;
using StrykerDG.FarmForge.LocalApi.Controllers.DTO.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StrykerDG.FarmForge.LocalApi.Controllers
{
    [ApiController]
    [Route("Device")]
    public class DeviceController : ControllerBase
    {
        private IActorRef DeviceActor { get; set; }

        public DeviceController(List<IActorRef> actorRefs)
        {
            DeviceActor = actorRefs
                .Where(ar => ar.Path.ToString().Contains("DeviceActor"))
                .FirstOrDefault();
        }

        // TODO: Add Authorization
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> RegisterDevice([FromBody]DeviceRegistrationDTO registrationRequest)
        {
            await DeviceActor.Ask(new AskToRegisterDevice(
                registrationRequest.DeviceName,
                registrationRequest.IpAddress,
                registrationRequest.SerialNumber,
                registrationRequest.SecurityToken,
                registrationRequest.InterfaceEndpoint
            ));

            // TODO: Create standard api response object
            return Ok();
        }
    }
}
