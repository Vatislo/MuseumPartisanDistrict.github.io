document.getElementById("SidePanelButton").addEventListener("click", function () {
  var SidePanel = document.getElementById("sidepanel");
  if (SidePanel.style.width === "250px") {
    SidePanel.style.width = "0";
  } else {
    SidePanel.style.width = "250px";
  }
});

document.getElementById("ClosePanelButton").addEventListener("click", function () {
  var SidePanel = document.getElementById("sidepanel");
  SidePanel.style.width = "0";
});