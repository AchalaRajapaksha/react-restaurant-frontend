import { FormControl, FormHelperText, Input, FormLabel} from "@chakra-ui/react";
import React from "react";

export default function FormInput({ label, type="text", onChange, value}) {
    return (
      <FormControl>
            <FormLabel>{ label}</FormLabel>
            <Input type={type} value={value} onChange={onChange} width="100%" />
      </FormControl>
    );
}
