type ValidatorType = keyof typeof validationRules;
const validationRules = {
  nameRegex: /^[가-힣a-zA-Z\s]{2,}$/,
  birthdayRegex: /^[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
  emailRegex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Za-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

const getRegex = (validator: ValidatorType) => {
  return validationRules[validator];
};

const useValidation = (props: { validator: ValidatorType }) => {
  const { validator } = props;

  const checkIsValid = (value: string) => {
    return getRegex(validator).test(value);
  };

  return { checkIsValid };
};

export default useValidation;
