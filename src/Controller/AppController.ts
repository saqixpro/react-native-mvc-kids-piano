import { SoundType } from "../../types";
import { SoundModel } from "../Model/SoundsModel";

export class AppController {
    Sound;
    constructor() {
        this.Sound = new SoundModel();
    }

    playSound = (type: SoundType) => {
        this.Sound.playSound(type);
    }

    resetSound = (type: SoundType) => {
        this.Sound.stopSound(type);
    }
}