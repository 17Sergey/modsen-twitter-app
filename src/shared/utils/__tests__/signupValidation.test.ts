import { signupValidation } from "../signupValidation";

describe("signupValidation", () => {
  it("should validate a valid signup", async () => {
    const validData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(validData)).resolves.toBe(validData);
  });

  it("should require fullName", async () => {
    const invalidData = {
      fullName: "",
      username: "john_doe123",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Name is required",
    );
  });

  it("should require username", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Phone number is required",
    );
  });

  it("should validate username format", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john doe",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Username cannot contain spaces and other specific symbols",
    );
  });

  it("should require email", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Email is required",
    );
  });

  it("should validate email format", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "invalid-email",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Email is not valid",
    );
  });

  it("should require password", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "john@example.com",
      password: "",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Password is required",
    );
  });

  it("should require confirmPassword", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Confirm password is required",
    );
  });

  it("should validate password length", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "john@example.com",
      password: "short",
      confirmPassword: "short",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Password must be at least 6 characters",
    );
  });

  it("should require matching passwords", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "differentPassword",
      birthDate: {
        month: "January",
        day: 15,
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Passwords must match",
    );
  });

  it("should require valid birthDate", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 32, // Invalid day
        year: 2000,
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "Day must be at most 31",
    );
  });

  it("should require minimum age", async () => {
    const invalidData = {
      fullName: "John Doe",
      username: "john_doe123",
      email: "john@example.com",
      password: "securePassword",
      confirmPassword: "securePassword",
      birthDate: {
        month: "January",
        day: 15,
        year: new Date().getFullYear() - MIN_USER_AGE + 1, // Too young
      },
    };

    await expect(signupValidation.validate(invalidData)).rejects.toThrow(
      "You must be at least 12 years old",
    );
  });
});
