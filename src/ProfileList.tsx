import React, { FC } from 'react'
import { Header, Icon, Item } from 'semantic-ui-react'

export interface Profile {
  id: number
  name: string
  age: number
  love: string
  sex: string
}

interface ProfileListProps {
  group: string
  profiles: Profile[]
}

const ProfileList: FC<ProfileListProps> = ({
  group = "不明",
  profiles
}) => (
  <>
    <Header as="h2">{group}</Header>
    <Item.Group>
      {profiles.map(p => (
        // #FIXME: Each child in a list SHOULD have id
        <Item>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>{p.name}</Item.Header>
            <Item.Meta>{p.age}歳</Item.Meta>
            <Item.Meta>{p.love}</Item.Meta>
            <Item.Meta>{p.sex}</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
)

export default ProfileList
