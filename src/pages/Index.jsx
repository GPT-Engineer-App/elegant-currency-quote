import { Box, Flex, Text, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const toast = useToast();

  const handleQuote = async () => {
    if (!currencyFrom || !currencyTo || !amount) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate fetching quote
    const quote = (Math.random() * (1.5 - 0.5) + 0.5).toFixed(2); // Random conversion rate
    setResult(`${amount} ${currencyFrom} is approximately ${(amount * quote).toFixed(2)} ${currencyTo}`);
  };

  return (
    <Box bg="black" color="white" minHeight="100vh" p={5}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Currency Quote Application
        </Text>
        <Flex mb={4}>
          <Input placeholder="From (e.g., USD)" value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value.toUpperCase())} mr={2} />
          <Input placeholder="To (e.g., EUR)" value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value.toUpperCase())} ml={2} />
        </Flex>
        <Flex mb={4}>
          <Input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Flex>
        <Button leftIcon={<FaExchangeAlt />} colorScheme="blue" onClick={handleQuote}>
          Get Quote
        </Button>
        {result && (
          <Text mt={4} fontSize="xl">
            {result}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default Index;
