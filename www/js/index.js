/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { WebUntis } from "webuntis";
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
	document.getElementById("deviceready").classList.add("ready");
}
const untis = new WebUntis(
	"dsporto",
	"LoboRod",
	"Portela@2008",
	"www.borys.webuntis.com"
);
onDeviceReady();
console.log("JS WORKING");
/*await untis.login()
const timetable = await untis.getOwnTimetableForToday()*/

let a;
function hide() {
	if (a == 1) {
		document.getElementById("body").style.display = "inline";
	} else {
		document.getElementById("body").style.display = "none";
		return (a = 1);
	}
}
