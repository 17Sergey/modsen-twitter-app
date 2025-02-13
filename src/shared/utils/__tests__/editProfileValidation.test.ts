import { editProfileValidation } from "../editProfileValidation";

describe("editProfileValidation", () => {
  it("should validate a valid profile", async () => {
    const validData = {
      fullName: "John Doe",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(validData)).resolves.toBe(
      validData,
    );
  });

  it("should require fullName", async () => {
    const invalidData = {
      fullName: "",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(invalidData)).rejects.toThrow(
      "Full name is required",
    );
  });

  it("should require fullName to be at least 2 characters", async () => {
    const invalidData = {
      fullName: "A",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(invalidData)).rejects.toThrow(
      "Full name must be at least 2 characters",
    );
  });

  it("should require fullName to not exceed 50 characters", async () => {
    const invalidData = {
      fullName: "A".repeat(51),
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(invalidData)).rejects.toThrow(
      "Full name cannot exceed 50 characters",
    );
  });

  it("should validate optional phoneNumber correctly", async () => {
    const validData = {
      fullName: "John Doe",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(validData)).resolves.toBe(
      validData,
    );
  });

  it("should reject invalid phoneNumber", async () => {
    const invalidData = {
      fullName: "John Doe",
      phoneNumber: "invalid-phone",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(invalidData)).rejects.toThrow(
      "Phone number must contain only digits and symbols +, (, ), -",
    );
  });

  it("should validate optional bio correctly", async () => {
    const validData = {
      fullName: "John Doe",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(validData)).resolves.toBe(
      validData,
    );
  });

  it("should reject bio exceeding 200 characters", async () => {
    const invalidData = {
      fullName: "John Doe",
      phoneNumber: "+123-456-7890",
      bio: "A".repeat(201),
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(invalidData)).rejects.toThrow(
      "Bio cannot exceed 200 characters",
    );
  });

  it("should validate optional link correctly", async () => {
    const validData = {
      fullName: "John Doe",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com",
    };

    await expect(editProfileValidation.validate(validData)).resolves.toBe(
      validData,
    );
  });

  it("should reject invalid link", async () => {
    const invalidData = {
      fullName: "John Doe",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "invalid-url",
    };

    await expect(editProfileValidation.validate(invalidData)).rejects.toThrow(
      "Link must be a valid URL",
    );
  });

  it("should reject link exceeding 100 characters", async () => {
    const invalidData = {
      fullName: "John Doe",
      phoneNumber: "+123-456-7890",
      bio: "This is a bio.",
      link: "https://example.com/" + "A".repeat(91), // 101 characters total
    };

    await expect(editProfileValidation.validate(invalidData)).rejects.toThrow(
      "Link cannot exceed 100 characters",
    );
  });
});
