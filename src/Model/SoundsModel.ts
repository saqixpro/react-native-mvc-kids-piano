import Sound from 'react-native-sound'
import { SoundType } from '../../types';

export class SoundModel {
    a; b; c; d; e; f; g;
    sounds;

    constructor() {
        Sound.setCategory("Playback");

        this.sounds = {
            A: require('../../assets/A.wav'),
            B: require('../../assets/B.wav'),
            C: require('../../assets/C.wav'),
            D: require('../../assets/D.wav'),
            E: require('../../assets/E.wav'),
            F: require('../../assets/F.wav'),
            G: require('../../assets/G.wav'),
        }

        this.a = new Sound(this.sounds.A, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
        this.b = new Sound(this.sounds.B, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
        this.c = new Sound(this.sounds.C, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
        this.d = new Sound(this.sounds.D, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
        this.e = new Sound(this.sounds.E, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
        this.f = new Sound(this.sounds.F, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
        this.g = new Sound(this.sounds.G, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
    }

    stopSound = (sound: SoundType) => {
        switch (sound) {
            case 'A':
                this.a.stop();
                break;
            case 'B':
                this.b.stop();
                break;
            case 'C':
                this.c.stop();
                break;
            case 'D':
                this.d.stop();
                break;
            case 'E':
                this.e.stop();
                break;
            case 'F':
                this.f.stop();
                break;
            case 'G':
                this.g.stop();
                break;
            default: return;
        }
    }

    playSound = (sound: SoundType) => {
        switch (sound) {
            case 'A':
                this.a.play();
                break;
            case 'B':
                this.b.play();
                break;
            case 'C':
                this.c.play();
                break;
            case 'D':
                this.d.play();
                break;
            case 'E':
                this.e.play();
                break;
            case 'F':
                this.f.play();
                break;
            case 'G':
                this.g.play();
                break;
            default: return;
        }
    }
}