import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import {TweenMax} from 'gsap'

function handleChange() {
  TweenMax.to('.rocket1', 4, {top:-1200, delay:0});
  TweenMax.to('.rocket2', 4, {top:-1200, delay:1});
}
function CreateCard(props) {
 return <Card>
    <Image src={props.data.url} alt= 'nasa photo of the day' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.data.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.data.date}</span>
      </Card.Meta>
      <Card.Description>
        {props.data.explanation}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='copyright' />
        {props.data.copyright}
      </a>
    </Card.Content>
    <Button onClick={handleChange}>🚀🚀Click Here🚀🚀</Button>
    <img className='rocket1' src='https://www.searchpng.com/wp-content/uploads/2019/01/Rocket-Ship-Png-715x715.png' alt='rocketship'/>
    <img className='rocket2' src='https://www.searchpng.com/wp-content/uploads/2019/01/Rocket-Ship-Png-715x715.png' alt='rocketship'/>
  </Card>
}

export default CreateCard;