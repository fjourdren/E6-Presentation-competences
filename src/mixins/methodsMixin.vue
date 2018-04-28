<script>
import data from "../data.json"

export default {
  methods: {
    getActiviteWithId: function (idActiviteValue) {
        for(let i = 0; i < data.activites.length; i++) {
            if(data.activites[i].id == idActiviteValue) {
                return data.activites[i];
            }
        }

        return -1
    },
    getSituationWithId: function (idSituationValue) {
        for(let i = 0; i < data.situations.length; i++) {
            if(data.situations[i].id == idSituationValue) {
                return data.situations[i];
            }
        }

        return -1
    },
    getPreuveWithId: function (idPreuveValue) {
        for(let i = 0; i < data.preuves.length; i++) {
            if(data.preuves[i].id == idPreuveValue) {
                return data.preuves[i];
            }
        }

        return -1
    },



    getPreuvesDSituation: function (idSituationValue) {
        let out = []

        for(let i = 0; i < data.liaisonsPreuvesSituation.length; i++) {
            if(data.liaisonsPreuvesSituation[i].idSituation == idSituationValue) {
                let preuve = this.getPreuveWithId(data.liaisonsPreuvesSituation[i].idPreuve)
                out.push(preuve)
            }
        }

        return out
    },
    getSituationsDPreuve: function (idPreuveValue) {
        let out = []

        for(let i = 0; i < data.liaisonsPreuvesSituation.length; i++) {
            if(data.liaisonsPreuvesSituation[i].idPreuve == idPreuveValue) {
                let situation = this.getSituationWithId(data.liaisonsPreuvesSituation[i].idSituation)
                out.push(situation)
            }
        }

        return out
    },



    getPreuvesDActivite: function (idActiviteValue) {
        let out = []

        for(let i = 0; i < data.liaisonsPreuvesActivite.length; i++) {
            if(data.liaisonsPreuvesActivite[i].idActivite == idActiviteValue) {
                let preuve = this.getPreuveWithId(data.liaisonsPreuvesActivite[i].idPreuve)
                out.push(preuve)
            }
        }

        return out
    },
    getActivitesDPreuve: function (idPreuveValue) {
        let out = []

        for(let i = 0; i < data.liaisonsPreuvesActivite.length; i++) {
            if(data.liaisonsPreuvesActivite[i].idPreuve == idPreuveValue) {
                let activite = this.getActiviteWithId(data.liaisonsPreuvesActivite[i].idActivite)
                out.push(activite)
            }
        }

        return out
    },



    getSituationsDActivite: function (idActiviteValue) {
        let out = []

        let preuves = this.getPreuvesDActivite(idActiviteValue)

        for(let i = 0; i < preuves.length; i++) {
            let situations = this.getSituationsDPreuve(preuves[i].id)
            
            for(let i = 0; i < situations.length; i++) {
                out.push(situations[0])
            }
        }

        return out
    },
    getActivitesDSituation: function (idSituationValue) {
        let out = []

        let preuves = this.getPreuvesDSituation(idSituationValue)

        for(let i = 0; i < preuves.length; i++) {
            let activites = this.getActivitesDPreuve(preuves[i].id)

            for(let i = 0; i < activites.length; i++) {
                out.push(activites[0])
            }
        }

        return out
    },
    
  }
}
</script>
