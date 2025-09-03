// zod for validation
import { de } from "zod/locales";
import { z } from "zod/v3";
// creating an object for schema
const User = z.object({
  username: z
    .string({ required_error: "Name is Required." })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(20, { message: "Name must be at most 20 characters long." }),

  email: z
    .string({ required_error: "Email is Required." })
    .email("Invalid email format.")
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(50, { message: "Email must be at most 50 characters long." })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format."),

  phone: z
    .string({ required_error: "Phone is Required." })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters long." })
    .max(15, { message: "Phone number must be at most 15 characters long." })
    .regex(/^\d+$/, "Phone number must contain only digits."),

  address: z
    .string({ required_error: "Address is Required." })
    .trim()
    .min(5, { message: "Address must be at least 5 characters long." })
    .max(100, { message: "Address must be at most 100 characters long." }),

  password: z
    .string({ required_error: "Password is Required." })
    .trim()
    .min(6, { message: "Password must be at least 6  characters long." })
    .max(20, { message: "Password must be at most 20 characters long." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    ),
});

// creating zod validatoin for contact form
const Contact = z.object({
  username: z
    .string({ required_error: "Name is Required." })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(20, { message: "Name must be at most 20 characters long." }),

  email: z
    .string({ required_error: "Email is Required." })
    .email("Invalid email format.")
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(50, { message: "Email must be at most 50 characters long." }),

  message: z
    .string({ required_error: "Message is Required." })
    .trim()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(500, { message: "Message must be at most 500 characters long." }),
});
// creating zod validation for login
const Login = z.object({
  email: z
    .string({ required_error: "Email is Required." })
    .email("Invalid email format.")
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(50, { message: "Email must be at most 50 characters long." })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format."),
  password: z
    .string({ required_error: "Password is Required." })
    .trim()
    .min(6, { message: "Password must be at least 6  characters long." })
    .max(20, { message: "Password must be at most 20 characters long." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    ),
}); 


export { User, Contact };
