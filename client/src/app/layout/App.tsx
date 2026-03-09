import { useState, useEffect, Fragment } from 'react';
import { Typography} from "@mui/material"
import axios from "axios";
import NavBar from './NavBar'
import Container from '@mui/material/Container'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
        .then(response => setActivities(response.data))
  }, []);
  return (
      <>
       <NavBar />
          <Container maxWidth='xl' sx={{mt: 3}}>
              <ActivityDashboard activities={activities}/>
          </Container>
          </>
  )
}
export default App
