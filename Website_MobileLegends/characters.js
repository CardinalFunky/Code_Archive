/**
 * This JavaScript file contains the basic stats of all heroes 
 * in Mobile Legends
 */

 /**
  * The Hero class contains all of the basic information that
  * all heroes in Mobile Legends have in common.
  * 
  * @param {number} Hp - 
  *     The Hero's Health Points
  * @param {number} Mana - 
  *     The Hero's Mana Points
  * @param {number} Physical_Atk - 
  *     The Hero's Physical Attack Points
  * @param {number} Physical_Defense -
  *     The Hero's Physical Defense Points
  * @param {number} Physical_Pen_Points -
  *     The Hero's Penetration Points
  * @param {number} Physical_Pen_Percent - 
  *     The Hero's Penetration Percentage
  * @param {number} Physical_Lifesteal - 
  *     The Hero's Physical Lifesteal Percentage
  * @param {number} Hp_Regen -
  *     The Hero's Health Point Regeneration
  * @param {number} Mana_Regen - 
  *     The Hero's Mana Point Regeneration
  * @param {number} Magic_Power -
  *     The Hero's Magic Power Points
  * @param {number} Magic_Defense - 
  *     The Hero's Magic Defense Points
  * @param {number} Magic_Pen_Points -
  *     The Hero's Magic Penetration Points
  * @param {number} Magic_Pen_Percent -
  *     The Hero's Magic Penetration Percentage
  * @param {number} Magic_Lifesteal -
  *     The Hero's Magic Lifesteal Percentage
  * @param {number} Movement_Spd -
  *     The Hero's Movement Speed Points
  * @param {number} Cd_Reduction -
  *     The Hero's Cool Down Reduction Percentage
  * @param {number} Attack_Speed -
  *     The Hero's Attack Speed Points
  * @param {number} Crit_Chance -
  *     The Hero's Critical Chance Percentage
  * @param {number} Spell_Vamp -
  *     The Hero's Spell Vamp Percentage
  * @param {string} name -
  *     The Hero's name
  * @param {string} role -
  *     The Hero's Role
  * @param {string} specialty -
  *     The Hero's Specialty
  */
let Hero = class {
    constructor(Hp, Mana, Physical_Atk, Physical_Defense,
        Physical_Pen_Points, Physical_Pen_Percent,
        Physical_Lifesteal, Hp_Regen, Mana_Regen,
        Magic_Power, Magic_Defense,
        Magic_Pen_Points, Magic_Pen_Percent,
        Magic_Lifesteal, Movement_Spd, 
        Cd_Reduction, Attack_Speed, Crit_Chance,
        Spell_Vamp, name, role, specialty) {
            this.Hp = Hp;
            this.Mana = Mana;
            this.Physical_Atk = Physical_Atk;
            this.Physical_Defense = Physical_Defense;
            this.Physical_Pen_Points = Physical_Pen_Points;
            this.Physical_Pen_Percent = Physical_Pen_Percent;
            this.Physical_Lifesteal = Physical_Lifesteal;
            this.Hp_Regen = Hp_Regen;
            this.Mana_Regen = Mana_Regen;
            this.Magic_Power = Magic_Power;
            this.Magic_Defense = Magic_Defense;
            this.Magic_Pen_Points = Magic_Pen_Points;
            this.Magic_Pen_Percent = Magic_Pen_Percent;
            this.Magic_Lifesteal = Magic_Lifesteal;
            this.Movement_Spd = Movement_Spd;
            this.Cd_Reduction = Cd_Reduction;
            this.Attack_Speed = Attack_Speed;
            this.Crit_Chance = Crit_Chance;
            this.Spell_Vamp = Spell_Vamp;
            this.name = name;
            this.role = role;
            this.specialty = specialty;
    };
    
    /**
     * This method sets the calculated amount
     * of health points.
     * 
     * @param {number} x -
     *  A number
     */
    set Hp_Calc(x) {
        return (this.Hp + x);
    }
    
    /**
     * This method sets the calculated amount
     * of mana points.
     * 
     * @param {number} x - 
     *  A Number
     */
    set Mana_Calc(x) {
        return (this.Mana + x);
    }
}

let Hero_Thamuz = new Hero(2758, 0, 107, 22, 
    0, 0, 0, 37, 0, 0, 10, 0, 0, 0, 312, 0, 
    0.84, 0, 0, "Thamuz", "Fighter", "Reap/Burst");