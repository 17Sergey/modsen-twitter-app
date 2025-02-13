import { loginValidation } from "../loginValidation";

describe("loginValidation", () => {
  it("should validate a valid login", async () => {
    const validData = {
      usernameOrEmail: "user@example.com",
      password: "securePassword",
    };

    await expect(loginValidation.validate(validData)).resolves.toBe(validData);
  });

  it("should require usernameOrEmail", async () => {
    const invalidData = {
      usernameOrEmail: "",
      password: "securePassword",
    };

    await expect(loginValidation.validate(invalidData)).rejects.toThrow(
      "Username or email is required",
    );
  });

  it("should require password", async () => {
    const invalidData = {
      usernameOrEmail: "user@example.com",
      password: "",
    };

    await expect(loginValidation.validate(invalidData)).rejects.toThrow(
      "Password is required",
    );
  });

  it("should require password to be at least 6 characters", async () => {
    const invalidData = {
      usernameOrEmail: "user@example.com",
      password: "short",
    };

    await expect(loginValidation.validate(invalidData)).rejects.toThrow(
      "Password must be at least 6 characters",
    );
  });
});
