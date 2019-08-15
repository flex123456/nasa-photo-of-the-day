function Card(props) {
  return <div>
       <Intro>Welcome Travelers!</Intro>
      <Pic src={props.data.url} alt="nasa image of the day"/>
      <Title>{props.data.title}</Title>
      <Text>{props.data.explanation}</Text>
      <Text>{props.data.date}</Text>
      <Text>{props.data.copyright}</Text>
  </div>

}

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Welcome Travelers!</Card.Header>
      <Card.Meta>
        <span className='date'>{props.data.date}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard