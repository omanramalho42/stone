import React, { useState } from 'react'

import { useTailwind } from 'tailwind-rn'

import { 
  Text, 
  View, 
  Switch,
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

import { 
  MapIcon, 
  LanguageIcon, 
  MoonIcon, 
  WifiIcon,  
  UsersIcon, 
  GlobeAltIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  InboxArrowDownIcon,
  InboxIcon,
  PencilIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon
} from 'react-native-heroicons/solid';

interface MenuProps {
  title: string;
  subTitles?: SubMenuProps[];
}

interface SubMenuProps {
  id: number;
  title: string;
  link?: string;
  icon?: React.ReactNode;
  color?: string;
  activeSwitch?: boolean;
} 

interface NavItemsProps {
  item: MenuProps;
}

const NavItems: NavItemsProps[] = [
  { 
    item: {
      title: 'Preferencias',
      subTitles: [
        { title: 'Linguagem', icon: <LanguageIcon color="white" />, color: 'orange', id: 1, link: "Language" },
        { title: 'Dark Mode', icon: <MoonIcon color="white"/>, color: 'blue', activeSwitch: true, id: 2 },
        { title: 'Usar wifi', icon: <WifiIcon color="white" />, color: 'violet', activeSwitch: true, id: 3 },
        { title: 'Localização', icon: <MapIcon color="white" />, color: 'red', id: 4, link: "Localizacao" },
        { title: 'Mostrar Colaboraçoes', icon: <UsersIcon color="white" />, color: 'green', activeSwitch: true, id: 5 },
        { title: 'Modo de acessibilidade', icon: <GlobeAltIcon color="white" />, color: 'pink', activeSwitch: true,id: 6 },
      ]
    } 
  },
  { 
    item: {
      title: 'Ajuda',
      subTitles: [
        { title: 'Reportar Bug', icon: <ExclamationTriangleIcon color="white" />, color: 'red', id: 7, link: "ReportBug" },
        { title: 'Entre em contato', icon: <EnvelopeIcon color="white" />, color: 'brown', id: 8, link: "ContactUs" },
      ]
    }
  },
  { 
    item: {
      title: 'Conteudo',
      subTitles: [
        { title: 'Salvos', icon: <InboxIcon color="white" />, color: 'blue', id: 9, link: "Salvos" },
        { title: 'Baixados', icon: <InboxArrowDownIcon color="white" />, color: 'green', id: 10, link: "Baixados" },
      ]
    }
  },
]

const Profile: React.FC = () => {
  const tailwind = useTailwind();

  const [activeForm, setActiveForm] = useState<any>({
    darkMode: true,
    wifi: false,
    showCollaborators: true,
    accessibility: false
  });

  return (
    <SafeAreaView style={tailwind('flex-1 bg-gray-900')}>
      <ScrollView contentContainerStyle={[styles.container, tailwind('mx-4')]}>
        <View 
          style={[
            { justifyContent: 'center' },
            tailwind('p-4 items-center')
          ]}
        >
          <TouchableOpacity>
            <View>
              <Image 
                source={{
                  uri: 'http://github.com/omanramalho42.png'
                }}
                style={[{ 
                  width: 72, 
                  height: 72,  
                  borderRadius: 50 
                }, tailwind('bg-gray-300')]}
              />
            </View>
            <View 
              style={[
                { zIndex: 1, padding: 4, right: -4, bottom: -10, justifyContent: 'center', backgroundColor: "#efa00e" },
                tailwind('absolute items-center rounded-full')
              ]}
            >
              <PencilIcon color="#121212" size={20} />
            </View>
          </TouchableOpacity>

          <Text 
            style={[
              { textAlign: 'center' },
              tailwind('mt-4 text-xl text-white font-bold')
            ]}
          >
            Oman Ramalho
          </Text>
          <Text
            style={[
              { textAlign: 'center', fontWeight: '400' },
              tailwind('mt-2 text-lg text-gray-400')
            ]}
          >
            Avenida dolor barreira 1430
          </Text>
        </View>

        {NavItems.map(({ item }, idx) => (
          <View 
            style={
              tailwind('flex-1')
            } 
            key={idx}
          >
            <Text 
              style={[
                { textTransform: 'uppercase', fontSize: 15, marginVertical: 10 },
                tailwind('text-gray-400 font-bold')
              ]}
            > 
              { item.title }  
            </Text>

            {item.subTitles && (
              item.subTitles.map(({ id, title, link, icon, color, activeSwitch }) => (
                <TouchableOpacity
                  key={id}
                  style={[
                    { marginVertical: 5, borderRadius: 5 },
                    tailwind('flex-1 flex-row justify-between items-center p-2 bg-gray-100')
                  ]} 
                >
                  <View style={tailwind('flex-row items-center')}>
                    <View 
                      style={[
                        { backgroundColor: color && color },
                        tailwind('rounded-full p-2 mx-2')
                      ]}
                    >
                      { icon && (
                        icon
                      )}
                    </View>
                    <Text
                      style={
                        { fontSize: 14 }
                      }
                    > 
                      { title } 
                    </Text>
                  </View>

                  <View style={tailwind('flex-1')}/>

                  {activeSwitch && (
                    <Switch
                      value={activeForm[id]}
                      onValueChange={(value) => 
                        setActiveForm({...activeForm, [id]: value })
                      } 
                    />
                  )}

                  {link && (
                    <ChevronRightIcon color="#121212" size={22} />
                  )}

                </TouchableOpacity>
              ))
            )}
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  }
});

export default Profile