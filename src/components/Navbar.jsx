import React from 'react'
import Container from './Container'
import Image from './Image'
import List from './List'
import ListItem from './ListItem'

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div>
          <Image src="images/logo.png" alt="logo" />
          <List className="flex gap-5">
            <ListItem className="hover:text-red-400" item="Home" />
            <ListItem className="hover:text-red-400" item="Home" />
            <ListItem className="hover:text-red-400" item="Home" />
            <ListItem className="hover:text-red-400" item="Home" />
          </List>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar