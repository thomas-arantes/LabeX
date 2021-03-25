import React from 'react'
import {Header, HomepageContainer} from './styles.js'
import {useHistory} from 'react-router-dom'

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
          <Header>
              <p>Logo</p>
              <button onClick = {goToLoginPage}> Login </button>
          </Header>
          <HomepageContainer>
              <h2>Se inscreva agora para sua primeira viagem espacial!</h2>
              <button onClick = {goToApplicationForm}>Inscrição</button>
          </HomepageContainer>
      </div>
    );
}
  export default HomePage;