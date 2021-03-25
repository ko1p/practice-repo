import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required().min(2, 'слишком короткий').max(5, 'слишком длинный'),
  age: yup.number().typeError('значение должно быть числом').positive().integer('значение должно быть целым числом').required().max(99).min(18),
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched"
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register} />
      <p>{errors.firstName?.message}</p>
        
      <input type="text" name="age" ref={register} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
  );
}