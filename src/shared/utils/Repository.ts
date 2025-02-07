import { db } from "@/appFSD/api/firebase";
import {
  collection,
  CollectionReference,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default class Repository<T> {
  protected collectionRef: CollectionReference<T>;

  constructor(collectionName: string) {
    this.collectionRef = collection(
      db,
      collectionName,
    ) as CollectionReference<T>;
  }

  async getAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[];
  }

  async getById(id: string): Promise<T | null> {
    const docRef = doc(this.collectionRef, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  async create(data: T): Promise<string> {
    const docRef = await addDoc(this.collectionRef, data);
    return docRef.id;
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    const docRef = doc(this.collectionRef, id);
    await updateDoc(docRef, data);
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.collectionRef, id);
    await deleteDoc(docRef);
  }
}
