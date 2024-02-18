import { useState, useEffect } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useAuthentication } from '@/lib/hooks/use-authentication';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

const Multistep = () => {
  const { user, isAuthenticated, isLoading, userId } = useAuthentication();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const mutation = useMutation(api.users.store);

  // Form state to hold collected data
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    visibility: '',
    country: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    about: '',
    did: '',
    birthdate: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (user) {
      // Prefill form data with user's details if available
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        visibility: '',
        country: user.country || '',
        streetAddress: user.address || '',
        city: user.city || '',
        postalCode: user.postalCode || '',
        about: '',
        did: userId || '',
        birthdate: user.birthdate || '',
        phoneNumber: user.phoneNumber || '',
      });
    }
  }, [user, userId]);

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Check if any field is empty
    interface User {
      firstName: string;
      lastName: string;
      email: string;
      visibility: string;
      country: string;
      streetAddress: string;
      city: string;
      postalCode: string;
      about: string;
      [key: string]: string; // Add index signature
    }

    const emptyFields = Object.keys(formData).filter((key:any) => !formData[key]);    // If there are empty fields, display a toast message
    if (emptyFields.length > 0) {
      toast({
        title: 'Form submission failed.',
        description: `Please fill in the following fields: ${emptyFields.join(', ')}.`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      console.log(formData);

      const sendData =  await mutation({ userInfo: formData });
      if (sendData) {
        console.log(sendData);
        toast({
          title: 'Form submitted.',
          description: 'Data collected from the form.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
  
      
    }
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? (
          <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              Create your AI Presence
            </Heading>
            <Flex>
              <FormControl mr="5%">
                <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                  First name
                </FormLabel>
                <Input
                  id="first-name"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                  Last name
                </FormLabel>
                <Input
                  id="last-name"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Flex>
            <FormControl mt="2%">
              <FormLabel htmlFor="email" fontWeight={'normal'}>
                Email address
              </FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="visibility" fontWeight={'normal'} mt="2%">
                AI Visibility
              </FormLabel>
              <Select
                id="visibility"
                placeholder="Select visibility"
                name="visibility"
                value={formData.visibility}
                onChange={handleInputChange}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </Select>
            </FormControl>
          </>
        ) : step === 2 ? (
          <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              User Details
            </Heading>
            <FormControl>
              <FormLabel htmlFor="country" fontWeight={'normal'}>
                Country
              </FormLabel>
              <Input
                id="country"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="street-address" fontWeight={'normal'}>
                Street Address
              </FormLabel>
              <Input
                id="street-address"
                placeholder="Street Address"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="city" fontWeight={'normal'}>
                City
              </FormLabel>
              <Input
                id="city"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="postal-code" fontWeight={'normal'}>
                Postal Code
              </FormLabel>
              <Input
                id="postal-code"
                placeholder="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </FormControl>
          </>
        ) : (
          <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
              About You
            </Heading>
            <FormControl id="about" mt={1}>
              <FormLabel htmlFor="about" fontWeight={'normal'}>
                About you
              </FormLabel>
              <Textarea
                id="about"
                placeholder="Take your time to write a brief description about yourself..."
                name="about"
                value={formData.about}
                onChange={handleInputChange}
              />
              <FormHelperText>Your data will not be shared with third parties.</FormHelperText>
            </FormControl>
          </>
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                bg={"blue.500"}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Multistep;

interface User {
  firstName: string;
  lastName: string;
  email: string;
  visibility: string;
  country: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  about: string;
}
