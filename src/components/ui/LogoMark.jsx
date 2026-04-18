import AutoMediaSlot from "./AutoMediaSlot.jsx";
import { buildSlotCandidates } from "../../utils/mediaSlots.js";

export default function LogoMark({ className = "" }) {
  const logoCandidates = buildSlotCandidates("/media/brand/logo", 1, false);

  return (
    <AutoMediaSlot
      candidates={logoCandidates}
      alt="Logo de Pokemon Ascenso"
      className={`logo-mark ${className}`.trim()}
      placeholder="Logo"
      interactive={false}
    />
  );
}
