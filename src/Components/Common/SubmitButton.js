import { Button } from '@chakra-ui/react'
import React from 'react'


export default function SubmitButton({ text, colorScheme="blue", className="", onClick}) {
    return (
        <Button colorScheme={colorScheme} className={className} onClick={ onClick}>
        {text}
      </Button>
    );
}
