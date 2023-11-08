import { Text, Flex, Button } from '@chakra-ui/react'
import { AiFillAlert } from 'react-icons/ai'

export function TimerFinishedAlert({ time, onClose }) {
  const textValidationNumber =
    time > 1
      ? `Parabéns ciclo de ${time} minutos finalizado!`
      : `Parabéns ciclo de ${time} minuto finalizado!`
  return (
    <Flex
      width={620}
      rounded={4}
      bg="red.500"
      direction="column"
      gap={4}
      min-height={150}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={4}
      m="auto"
    >
      <AiFillAlert size={32} />
      <Text width="sm" fontWeight="bold" fontSize="24" color="blackAlpha.800">
        {textValidationNumber}
      </Text>
      <Button onClick={onClose} px={16}>
        Fechar
      </Button>
    </Flex>
  )
}
