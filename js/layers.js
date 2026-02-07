addLayer("p", {
    name: "subatomic particles", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "subatomic particles", // Name of prestige currency
    baseResource: "atoms", // Name of resource prestige is based on
    baseAmount() { return player.points }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        { key: "s", description: "S: Reset for subatomic particles", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
    ],
    layerShown() { return true },

    upgrades: {
        11: {
            title: "More",
            description: "x2 quark gain",
            cost: new Decimal(5),
        },
        12: {
            title: "More pt 2",
            description: "x2 quark gain",
            cost: new Decimal(10),
        },
        13: {
            title: "More pt 3",
            description: "x2 quark gain",
            cost: new Decimal(20),
        },
        14: {
            title: "More synergy",
            description: "something idk",
            cost: new Decimal(35),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
    },

})
