import { useState } from "react";

export const useSuccesMessage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const displaySuccesMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return { isSubmitted, displaySuccesMessage };
};
