import { db } from "@/app/api/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import Repository from "../Repository";

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
  getDocs: jest.fn(),
  doc: jest.fn(),
  getDoc: jest.fn(),
  updateDoc: jest.fn(),
  deleteDoc: jest.fn(),
}));

describe("Repository", () => {
  const mockCollectionName = "testCollection";
  const repository = new Repository<{ name: string }>(mockCollectionName);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all documents", async () => {
      const mockDocs = [
        { id: "1", data: () => ({ name: "Doc1" }) },
        { id: "2", data: () => ({ name: "Doc2" }) },
      ];
      (getDocs as jest.Mock).mockResolvedValueOnce({ docs: mockDocs });

      const result = await repository.getAll();
      expect(result).toEqual([
        { id: "1", name: "Doc1" },
        { id: "2", name: "Doc2" },
      ]);
    });
  });

  describe("getById", () => {
    it("should return a document by id", async () => {
      const mockDoc = { id: "1", data: () => ({ name: "Doc1" }) };
      (getDoc as jest.Mock).mockResolvedValueOnce({
        exists: () => true,
        id: mockDoc.id,
        data: mockDoc.data,
      });

      const result = await repository.getById("1");
      expect(result).toEqual({ id: "1", name: "Doc1" });
    });

    it("should return null if the document does not exist", async () => {
      (getDoc as jest.Mock).mockResolvedValueOnce({ exists: () => false });

      const result = await repository.getById("1");
      expect(result).toBeNull();
    });
  });

  describe("create", () => {
    it("should create a document and return its id", async () => {
      const mockDocRef = { id: "1" };
      (addDoc as jest.Mock).mockResolvedValueOnce(mockDocRef);

      const result = await repository.create({ name: "Doc1" });
      expect(result).toBe("1");
    });
  });

  describe("update", () => {
    it("should update a document", async () => {
      await repository.update("1", { name: "UpdatedDoc1" });
      expect(updateDoc).toHaveBeenCalledWith(
        doc(repository[mockCollectionName], "1"),
        { name: "UpdatedDoc1" },
      );
    });
  });

  describe("delete", () => {
    it("should delete a document", async () => {
      await repository.delete("1");
      expect(deleteDoc).toHaveBeenCalledWith(
        doc(repository[mockCollectionName], "1"),
      );
    });
  });
});
