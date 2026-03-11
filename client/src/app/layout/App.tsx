import { useState, useEffect, Fragment } from 'react';
import { Typography, Box} from "@mui/material"
import axios from "axios";
import NavBar from './NavBar'
import Container from '@mui/material/Container'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
        .then(response => setActivities(response.data))
  }, [])
    
  const handleSelectActivity=(id: string)=>{
      setSelectedActivity(activities.find(x=>x.id===id));
  }  
  const handleCancelSelectActivity=()=>{
      setSelectedActivity(undefined);
  }
    
  return (
      <Box sx={{bgcolor: '#eeeeee'}}>
       <NavBar />
          <Container maxWidth='xl' sx={{mt: 3}}>
              <ActivityDashboard 
                  activities={activities}
                  selectActivity={handleSelectActivity}
                  cancelSelectActivity={handleCancelSelectActivity}
                  selectedActivity={selectedActivity}
              />
          </Container>
      </Box> 
  )
}
export default App
