import { App } from "astal/gtk3";
import style from "./style.scss";
import DesktopClock from "./widget/DesktopClock";
import ChargingAlert from "./widget/ChargingAlert";

App.start({
  css: style,
  main() {
    App.get_monitors().forEach((gdkmonitor) => {
      DesktopClock(gdkmonitor);
      ChargingAlert(gdkmonitor);
    });
  },
});
