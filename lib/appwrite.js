import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setProject("6a4998d8001790b9b2ab")
    .setEndpoint("https://fra.cloud.appwrite.io/v1");

export const account = new Account(client);

export const avatars = new Avatars(client);