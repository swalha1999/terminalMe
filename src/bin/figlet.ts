import figletAlice, {Fonts} from 'figlet';
import { println, printnln, createCode, delay } from '../utils/utils';

export const figlet = async (args: string[]): Promise<void> => {
    if (args.length === 0) {
       println(`
        Usage: figlet <text>
        or
        figlet -f <font> <text>
        figlet --fonts to list available fonts
        `);
        return;
    }

    if (args[0] === '--fonts') {
       println(`
1Row
3-D
3D Diagonal
3D-ASCII
3x5
4Max
Acrobatic
Alligator
Alligator2
Alpha
Alphabet
Arrows
Avatar
B1FF
B1FF
Banner
Banner3-D
Banner3
Banner4
Barbwire
Basic
Bear
Bell
Benjamin
Big
Bigfig
Binary
Block
Blocks
Bloody
Bolger
Braced
Bright
Broadway
Bubble
Bulbhead
Caligraphy
Caligraphy2
Cards
Catwalk
Chiseled
Chunky
Coinstak
Cola
Colossal
Computer
Contessa
Contrast
Cosmike
Crawford
Crawford2
Crazy
Cricket
Cursive
Cyberlarge
Cybermedium
Cybersmall
Cygnet
DANC4
DWhistled
Decimal
Diamond
Digital
Doh
Doom
Double
Electronic
Elite
Epic
Fender
Filter
Flipped
Fraktur
Fuzzy
Georgi16
Georgia11
Ghost
Ghoulish
Glenyn
Goofy
Gothic
Graceful
Gradient
Graffiti
Greek
Hex
Hieroglyphs
Hollywood
ICL-1900
Impossible
Invita
Isometric1
Isometric2
Isometric3
Isometric4
Italic
Ivrit
Jacky
Jazmine
Jerusalem
Katakana
Kban
Keyboard
Knob
Konto
LCD
Lean
Letters
Linux
Lockergnome
Madrid
Marquee
Maxfour
Merlin1
Merlin2
Mike
Mini
Mirror
Mnemonic
Modular
Morse
Morse2
Moscow
Mshebrew210
Muzzle
NScript
Nancyj-Fancy
Nancyj-Improved
Nancyj-Underlined
Nancyj
Nipples
O8
OS2
Octal
Ogre
Pagga
Patorjk-HeX
Pawp
Peaks
Pebbles
Pepper
Poison
Puffy
Puzzle
Pyramid
Rammstein
Rectangles
Relief
Relief2
Reverse
Roman
Rot13
Rot13
Rotated
Rounded
Rozzo
Runic
Runyc
Script
Serifcap
Shadow
Shimrod
Short
Slant
Slide
Small
Soft
Speed
Spliff
Stacey
Stampate
Stampatello
Standard
Stellar
Stforek
Stop
Straight
Sub-Zero
Swan
Sweet
THIS
Tanja
Tengwar
Term
Test1
Thick
Thin
Thorned
Ticks
Tiles
Tinker-Toy
Tombstone
Train
Trek
Tsalagi
Tubular
Twisted
Univers
Varsity
Wavy
Weird
Whimsy
Wow`);
return;
    }

    println((await figletHelp(args)));
}

export const figletHelp = async (args: string[] = []): Promise<String> => {
    const index = args.findIndex((arg) => arg === '-f');
    const font = index !== -1 ? args[index + 1] : 'Standard';   
    const text = index !== -1 ? args.slice(index+2, args.length).join(' ') : args.join(' ');
    console.log(font, text);
    let outdata :string | undefined = undefined;
    //@ts-ignore
    figletAlice.text(text , font, (err,data)=>{
            if(err){
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            outdata = data;
        }
    );
    const font2 = index !== -1 ? args[index + 1] : 'Standard';
    const font3: Fonts = font2 as Fonts;
    const text2 = index !== -1 ? args.slice(index+2, args.length).join(' ') : args.join(' ');
    await delay(200);
    figletAlice.text(text2 , font3, (err,data)=>{
        if(err){
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        outdata = data;
    }
    );

    return outdata ?  outdata : "please try again. tap the up arrow and press enter";
}