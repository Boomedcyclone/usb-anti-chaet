import * as Gametest from "mojang-gametest";
import * as Minecraft from "mojang-minecraft";

const World = Minecraft.World;
const Commands = Minecraft.Commands

export function hacknotif(player, check, message) {
    // validate that required params are defined
    if(!player) return console.warn("Error: ${player} isnt defined. Did you forget to pass it?");
    if(!check) return console.warn("Error: ${check} isnt defined. Did you forget to pass it?");

    if (check === "BadPackets2") {
        message.cancel = true;
        Commands.run(`scoreboard players add "${player.name}" spammervl 1`, World.getDimension("overworld"));
        Commands.run(`execute "${player.name}" ~~~ tellraw @a[tag=notify] {"rawtext":[{"text":"§r§6[§aScythe§6]§r "},{"selector":"@s"},{"text":" §1has failed §7(Player) BadPackets/2. VL= "},{"score":{"name":"@s","objective":"spammervl"}}]}`, World.getDimension("overworld"));
    } else if (check === "NameSpoofA") {
        Commands.run(`scoreboard players add "${player.name}" namespoofvl 1`, World.getDimension("overworld"));
        Commands.run(`execute "${player.name}" ~~~ tellraw @a[tag=notify] {"rawtext":[{"text":"§r§6[§aScythe§6]§r "},{"selector":"@s"},{"text":" §1has failed §7(Exploit) §4NameSpoof/A. VL= "},{"score":{"name":"@s","objective":"namespoofvl"}}]}`, World.getDimension("overworld"));
    } else if (check === "NameSpoofB") {
        Commands.run(`scoreboard players add "${player.name}" namespoofvl 1`, World.getDimension("overworld"));
        Commands.run(`execute "${player.name}" ~~~ tellraw @a[tag=notify] {"rawtext":[{"text":"§r§6[§aScythe§6]§r "},{"selector":"@s"},{"text":" §1has failed §7(Exploit) §4NameSpoof/B. VL= "},{"score":{"name":"@s","objective":"namespoofvl"}}]}`, World.getDimension("overworld"));
    } else if (check === "CrasherA") {
        Commands.run(`scoreboard players add "${player.name}" crasher 1`, World.getDimension("overworld"));
        Commands.run(`execute "${player.name}" ~~~ tellraw @a[tag=notify] {"rawtext":[{"text":"§r§6[§aScythe§6]§r "},{"selector":"@s"},{"text":" §1has failed §7(Exploit) §4Crasher/A. VL= "},{"score":{"name":"@s","objective":"crashervl"}}]}`, World.getDimension("overworld"));
    } else if (check === "FlyB") {
        Commands.run(`scoreboard players add "${player.name}" flyvl 1`, World.getDimension("overworld"));
        Commands.run(`execute "${player.name}" ~~~ tellraw @a[tag=notify] {"rawtext":[{"text":"§r§6[§aScythe§6]§r "},{"selector":"@s"},{"text":" §1has failed §7(Movement) §4Fly/B. VL= "},{"score":{"name":"@s","objective":"flyvl"}}]}`, World.getDimension("overworld"));
        Commands.run(`execute "${player.name}" ~~~ tp @s ~ ~-2 ~`, World.getDimension("overworld"));
    } else return console.warn(`Error: No check by the name of ${check} exists. Did you forget to put an if statement?`);
};