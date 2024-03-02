import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { getInventory } from "../api";
import { Picker } from "@react-native-picker/picker";
import { BotonPrestamo } from "../components/boton";



const App = () => {
    const [inventory, setInventory] = useState([]);
    const [selectedItemIds, setSelectedItemIds] = useState([null, null, null, null]);
    const [selectedItems, setSelectedItems] = useState([null, null, null, null]);

    const loadInventory = async () => {
        const data = await getInventory();
        setInventory(data);
    };

    useEffect(() => {
        loadInventory();
    }, []);

    const renderItem = (index) => {
        return (
            <View style={styles.itemContainer} key={index}>
                <Picker
                    selectedValue={selectedItemIds[index]}
                    onValueChange={(itemValue, itemIndex) => {
                        const updatedItemIds = [...selectedItemIds];
                        updatedItemIds[index] = itemValue;
                        setSelectedItemIds(updatedItemIds);

                        const selectedItemObject = inventory.find(
                            (inventoryItem) => inventoryItem.id === itemValue
                        );

                        const updatedItems = [...selectedItems];
                        updatedItems[index] = selectedItemObject;
                        setSelectedItems(updatedItems);
                    }}
                >
                    <Picker.Item label="Selecciona un elemento" value={null} />
                    {inventory.map((inventoryItem) => (
                        <Picker.Item
                            key={inventoryItem.id.toString()}
                            label={inventoryItem.name}
                            value={inventoryItem.id}
                        />
                        
                    ))}    
                </Picker>
                <Text>Id Elemento seleccionado: {selectedItemIds[index]}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <BotonPrestamo onPress={() => alert('Realizado')} text="solicitar" />
                </View>     
            </View>   
        );
    };
    
    const styles = StyleSheet.create({
        itemContainer: {
            backgroundColor: "#059014",
            padding: 5,
            marginVertical: 8,
            borderRadius: 5,
            width: '100%',
        },
        itemName: {
            color: "#fff",
            fontSize: 16,
        },
        itemDate: {
            color: "#fff",
            fontSize: 12,
        },
    });

    return (
        <React.Fragment>
            {renderItem(0)}
            {renderItem(1)}
            {renderItem(2)}
        </React.Fragment>   
    );
};

export default App;
