/* returnerer funktioner som bruges til put, delete og post methods */
export function useFetchMessages() {
  const apiUrl = `http://localhost:3042/message`;

  async function sendMessage(body) {
    try {
      const res = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.error("Fejl i at sende besked", error);
    }
  }

  return {
    sendMessage,
  };
}
