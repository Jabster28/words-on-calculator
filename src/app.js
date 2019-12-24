/*global $*/
import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

// Material things - Credit to https://materializecss.com
import "../app/materialize/materialize.min.css";
import { textareaAutoResize as resize } from "../app/materialize/materialize.js";
// Loading bars from https://loading.io/progress
import "../app/loading/loading-bar.min.css";
import "../app/loading/loading-bar.min.js";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";
import env from "env";
window.$ = window.jQuery = require("jquery");

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

// document.querySelector("#app").style.display = "block";
// // document.querySelector("#greet").innerHTML = greet();
// document.querySelector("#os").innerHTML = osMap[process.platform];
// document.querySelector("#author").innerHTML = manifest.author;
// document.querySelector("#env").innerHTML = env.name;
// document.querySelector("#electron-version").innerHTML =
//   process.versions.electron;

// // prints "hi" in the browser's dev tools console
const words = "jlqvwz"; //TODO: make var
function s(l) {
  if (l.match(/[jlqvwz]/)) {
    return `Invalid Letters! No use of ${words}!`;
  }
  if (l == "") return "";
  var map = {};
  var mapp = `a=a,(-)
b=a,'
c=a,^-1
d=a,sin
e=a,cos
f=a,tan
g=optn,3,8
h=shift,7,1,1
i=1
k=optn,3,6
l=7
m=a,M+
n=optn,3,3
o=0
p=optn,3,4
r=shift,7,4,6
s=5
t=optn,3,9
u=shift,7,4,1
x=a,)
y=a,s<>d
 =>,(-),shift,(
!=shift,^-1
,=shift,)`.split("\n");
  for (var i of mapp) {
    var x = i.split("=");
    map[x[0]] = x[1];
  }
  var tee = ["shift", "("];
  for (var i of l.split("")) {
    tee.push(map[i.toLowerCase()]);
  }
  return tee
    .join(",")
    .split(",")
    .join("\n");
}
$(() => {
  // eslint-disable-next-line no-undef
  var loadBar = new ldBar(".ooh");
  loadBar.set(0);
  var z = () => {
    $(".ooh").hide();
    $(".content").show();
  };
  var y = () => {
    loadBar.set(100);
    setTimeout(z, 1500);
  };
  var x = () => {
    loadBar.set(60);
    setTimeout(y, 2000);
  };
  setTimeout(x, 5000);
  loadBar.set(40);

  $("#text").val("New Text");
  resize($("#text"));

  setInterval(() => {
    document.getElementById("text").value = s(
      document.getElementById("calc").value
    );
    resize($("#text"));
  }, 500);
});
