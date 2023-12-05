import { Dispatch } from "react";
import { AuthAction } from "../store/AuthActions";

export const loginCall = async (userCredentials: { email: string; password: string }, dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    dispatch({ type: "LOGIN_ERROR", payload: errorMessage });
  }
};

