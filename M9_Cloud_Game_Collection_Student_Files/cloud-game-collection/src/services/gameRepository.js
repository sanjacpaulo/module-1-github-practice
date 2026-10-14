import { starterGames } from '../data/starterGames';

/*
  MODULE 9 TODO FILE
  ------------------
  This is the main file students complete.

  The app starts in DEMO MODE with starterGames so the UI works first.
  Replace each TODO section with Firestore code from the lesson.
*/

export async function getGames() {
  try {
    const querySnapshot = await getDocs(collection(db, 'games'));
    const games = querySnapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    
    return games.length > 0 ? games : starterGames;
  } catch (error) {
    console.error("Error reading games from Firestore:", error);
    return starterGames;
  }
}

export async function addGame(game) {
  // TODO 2 — CREATE
  // Add the supplied game object to the "games" collection.
  // Return the new game with its Firestore document id.

  try {
    const docRef = await addDoc(collection(db, 'games'), {
      title: game.title || 'Untitled Game',
      genre: game.genre || 'Action',
      coverUrl: game.coverUrl || '', // Supports real cover art URLs
      rating: game.rating || 0,
      createdAt: new Date().toISOString(),
      ...game,
    });

    return {
      id: docRef.id,
      ...game,
    };
  } catch (error) {
    console.error("Error adding game to Firestore:", error);
    throw error;
  }
}

export async function updateGame(id, changes) {
  // TODO 3 — UPDATE
  // Use the document id to update only the supplied fields.

  try {
    const gameRef = doc(db, 'games', id);
    await updateDoc(gameRef, changes);

    return {
      id,
      ...changes,
    };
  } catch (error) {
    console.error("Error updating game in Firestore:", error);
    throw error;
  }
}

export async function deleteGame(id) {
  // TODO 4 — DELETE
  // Delete the Firestore document that matches this id.

  try {
    const gameRef = doc(db, 'games', id);
    await deleteDoc(gameRef);

    return id;
  } catch (error) {
    console.error("Error deleting game from Firestore:", error);
    throw error;
  }
}
