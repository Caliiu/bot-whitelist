export default {
    "sql": {
        "host": "127.0.0.1",
        "user": "root",
        "password": "",
        "database": "nparp",
        "port": 3306
    },

    "channels": {
        "welcome_channel": "1035799179286544404", // canal de mensagem de bem vindo
        "exit_channel": "1035799179286544404" // canal de mensagem de log de saida
    },

    "atendimento": {
        "category": "1245145314214805526", // categoria aonde a call de atendimento será criada
        "staff": "1242994794272264203" // Aqui vc coloca o id do cargo que vai poder usar o comando de atendimento
    },

    "idservidor": {
        "id": "1229562099315773450", // Aqui vc coloca o id do seu discord
    },

    "connect": {                     
        "link": "https://cfx.re/join/4kr7jv", // Aqui vc coloca o link do botão do conexão
        "players": "10", // aqui vc coloca a quantidade de players que sua key do fivem suporta
        "ipvps": "52.67.20.202:30120" // aqui vc coloca o ip da sua vps / exemplo: ipdavps:30120 tem que ser nesse padrão
    },

    "automatico": {
        "authrole": "1245141462174269440", // id do cargo que a verificação vai dar ao usuario
        "guestrole": "1245369644492259341", // id do cargo visitante que a verificação vai remover ao usuario
        "automessage": "1243532149223587841" // id do canal que vai receber em 1 em 1 hora um msg automatica
    },

    "whitelist": {
        "imageurl": "https://i.ibb.co/WsPhHSG/allowlistt.png", // Aqui vc coloca o link da imagem que vai aparecer la na allowlist
        "channelRole": "1245350715484803143", // canal aonde será recebido o id
        "WhitelistIsOpen": true, // Coloque como "false" caso queira que a whitelist seja desabilitada
        "simultaneousWhitelist": 20, // limite de quantas whitelist podem serem feitas ao mesmo tempo
        "category": "1245351092603195494", // categoria aonde o canal de whitelist será criado
        "result": "1245351249021501501", // canal aonde o resultado será postado
        "staff": "1242994794272264203", // cargo necessario para aprovar / reprovar whitelists
        "channel": "1245350715484803143", // canal aonde será enviado as whitelist para serem lidas
        "waiting_role": "1245351682683174992", // cargo que será recebido quando o membro fizer a wl (aguardado resultado da whitelist)
        "approved_role": "1245351723250487390", // cargo que será recebido quando o membro for aprovado na wl (aguardado liberação de ID ou HEX)

        "questions": [
            {
                id: '01',
                question: 'Nome e idade do seu personagem e seu nome e Idade (RL)',
                time: 5,
                caracteres: 256
            },
            {
                id: '02',
                question: 'Por que você faz Roleplay?',
                time: 5,
                caracteres: 256
            },
            {
                id: '03',
                question: 'Aponte 3 qualidades e 3 defeitos do seu personagem:',
                time: 5,
                caracteres: 256
            },
            {
                id: '04',
                question: 'Pretende entrar para trabalhar no legal ou ilegal? E porque?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '05',
                question: 'Em quais situações você chamaria um Admin dentro da cidade?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '06',
                question: 'Descreva como você orientaria algum player com problemas no microfone?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '07',
                question: 'Caso precise dizer em algum momento que você está com problemas externos, como você diria isso sem quebrar a imersão de outro player?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '08',
                question: 'Cite algumas formas de como quebrar a imersão de outro player:',
                time: 5,
                caracteres: 256,
            },
            {
                id: '09',
                question: 'O que é “falar fora de rp”? Cite 2 exemplos;',
                time: 5,
                caracteres: 256,
            },
            {
                id: '10',
                question: 'O que você diria e como você agiria após alguém falar “fora de rp” com você?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '11',
                question: 'Detalhe algum motivo que te levaria a fazer alguma cobrança:',
                time: 5,
                caracteres: 256,
            },
            {
                id: '12',
                question: 'Se algum player te agredisse sem motivos, o que você faria posteriormente?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '13',
                question: 'Em uma abordagem de sequestro, como você iria colaborar com os sequestradores? E o que não se deve fazer ao ser sequestrado?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '14',
                question: 'Um policial dá voz para que você pare o veículo, mas você está armado e com drogas, como se comportaria numa abordagem dessas?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '15',
                question: 'Ao sofrer um acidente de carro e ser levado até o hospital, o que você diria ao médico sobre o que está sentindo?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '16',
                question: 'Fazer Roleplay é gerar Roleplay. Cite 2 formas de gerar Roleplay com outro player.',
                time: 5,
                caracteres: 256,
            },
            {
                id: '17',
                question: 'Qual o significado do Roleplay pra você?',
                time: 5,
                caracteres: 256,
            },
            {
                id: '18',
                question: 'Conte um pouco da história do seu personagem:',
                time: 10,
                caracteres: 4000,
                history: true // UTILIZE SOMENTE O HISTORY: TRUE CASO SEJA REALMENTE A HISTORIA DO PERSONAGEM! SÓ PODE SER UTILIZADO 
            }
        ]
    },

    "liberation": {
        "rename": "964646546060746792", // canal aonde será enviado o discord, id e nome do personagem para renomear o membro do discord!
        "channel": "1135990626379382944", // canal aonde o membro vai enviar hex // id para liberação
        "addRole": "963207024915656770", // cargo que será entregue quando o ID for liberado!
        "removeRole": "1035799124215349258", // cargo que será removido quando o ID for liberado!
        "table": "accounts",
        "column": "whitelist",
        "identifier": "id"
    },

    "ticket": {
        "category": "1245145314214805526", // categoria aonde o canal de texto de ticket será criado
        "staff": "1245093603991097344", // cargo que terá acesso ao ticket
        "table": "discord", // tabela aonde ficará registrado todas as informações sobre tickets
        "categories": [{
            label: '📁 Suporte',
            description: 'Tickets para você tirar suas dúvidas.',
            value: 'Tirar dúvidas',
        },
        {
            label: '💎 Dúvidas Gemas',
            description: 'Tire suas dúvidas sobre nosso sistema de gemas.',
            value: 'Realizar uma Dúvidas sobre Gemas',
        },
        {
            label: '🚨 Denúncia',
            description: 'Viu algo de errado e tem como comprovar? Denúncie.',
            value: 'Realizar uma Denúncia',
        },
        {
            label: '📝 Solicitar FAC/ORG',
            description: 'Solicite a posse de uma facção ou organização.',
            value: 'Realizar uma Solicitação de FAC/ORG',
        }
        ]
    },

    "allowlistcategories": {
        "categories": [{
            label: 'Allowlist Normal',
            description: 'Enviar uma Allowlist Normal para análise.',
            emoji: '<:905497149658234930:1038291371590701117>',
            value: 'Allowlist Normal',
        }]
    },
}