import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import appConfig from '../config.json'
import React from 'react';


function Title(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <div>
        <Tag>{props.children}</Tag>
        <style jsx>{`
        ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
            font-size: 26px;
            font-weight: 600;
        }
        `}</style>
        </div>
    );
}
  
  export default function PaginaInicial() {
    const [username, setUsername] = React.useState('guilhermednz');
    const roteamento = useRouter();
    //const serverResponse = fetch(`https://api.github.com/users/${username}`).then(function(res){(res.status)});
  
    console.log(roteamento);

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1255&q=80)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '20px', padding: '40px', margin: '16px',
              boxShadow: '0 2px 10px 0 argb(0 0 0 / 30%)',  
              //backgroundColor: appConfig.theme.colors.neutrals[700],
              backgroundColor: "rgba(0, 0, 0, 0.65)",

            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento){
                infosDoEvento.preventDefault();
                console.log('Alguém submeteu o form');
                window.location.href = '/chat';
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Seja bem vindo!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              <TextField
                value={username}
                onChange={function (event){
                    console.log('usuario digitou', event.target.value);
                    const valor = event.target.value;
                    setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: "rgba(255, 255, 255, 0.3)",
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    //backgroundColor: appConfig.theme.colors.neutrals[800],
                    backgroundColor: "rgba(18, 18, 18, 0.3)",
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                // backgroundColor: appConfig.theme.colors.neutrals[800],
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '20px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                //src={username > 2 ? `https://github.com/${username}.png`: ""}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
