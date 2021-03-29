import React from 'react'
import { HomepageContainer } from './styled.js'
import {useHistory} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { Button } from "@material-ui/core"

const HomePage = () => {
    const history = useHistory(); 

    const goToLoginPage = () => {
        history.push("/login")
    };

    const goToApplicationForm = () => {
        history.push("/applicationform")
    }

    return (
      <div className="App">
          <HomepageContainer>
              <Typography>
                <h1>LabeX</h1>
              </Typography>
              <Typography>
                <h3>Se inscreva agora para sua primeira viagem espacial!</h3>
              </Typography>
              <Button
                gutterBottom 
                variant = {"contained"}
                align={'center'} 
                color={'Primary'}
                onClick = {goToApplicationForm}>
                  Inscrição
              </Button>
          </HomepageContainer>
      </div>
    );
}
  export default HomePage;