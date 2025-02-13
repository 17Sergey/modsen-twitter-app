import { usernameValidation } from "../usernameValidation";

describe("usernameValidation", () => {
  it("should validate a valid username", async () => {
    const validData = {
      username: "john_doe",
    };

    await expect(usernameValidation.validate(validData)).resolves.toBe(
      validData,
    );
  });

  it("should require username", async () => {
    const invalidData = {
      username: "",
    };

    await expect(usernameValidation.validate(invalidData)).rejects.toThrow(
      "Username is required",
    );
  });

  it("should require username to be at least 2 characters", async () => {
    const invalidData = {
      username: "A",
    };

    await expect(usernameValidation.validate(invalidData)).rejects.toThrow(
      "Must be at least 2 characters",
    );
  });

  it("should require username to not exceed 50 characters", async () => {
    const invalidData = {
      username: "A".repeat(51), // 51 characters
    };

    await expect(usernameValidation.validate(invalidData)).rejects.toThrow(
      "Cannot exceed 50 characters",
    );
  });
});
