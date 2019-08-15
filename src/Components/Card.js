
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function CreateCard(props) {


 return <div className='ui centered card' >
  <Card>
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
  </Card>
  </div>
}

export default CreateCard;