import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from "./FirstStepsApp";
/*import { MyAwesomeApp } from "./MyAwesomeApp.tsx";*/
/*import { MultiStageTimetable } from "./timetable/MultiStageTimetable.tsx";*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <FirstStepsApp />
  </StrictMode>,
)
