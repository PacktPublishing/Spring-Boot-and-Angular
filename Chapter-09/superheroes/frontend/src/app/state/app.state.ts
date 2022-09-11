import { AntiHeroState } from "../anti-hero/state/anti-hero.reducers";
import { AuthState } from "../auth/state/auth.reducers";

export interface AppState {
    antiHeroState: AntiHeroState,
    authState: AuthState
}