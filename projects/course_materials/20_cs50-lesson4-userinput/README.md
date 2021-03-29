# Lesson 4 Notes

```
{this.state.showContacts && (
  <ScrollView>
    {contacts.map(contacts => <Row {...contacts} /> )}
  </ScrollView>
)}
```
The operator && means that if the condition is true do whats next or else return false.
As false is not rendered this is the easiest way to render conditional components.

## Inmutability
```
  sort = () => {
    this.setState(prevState => ({ 
      contacts: [...prevState.contacts].sort(compareNames),
      }))
  }
```
You need to do the [...] to copy the array, to maintain Inmutability you need to create a new object every single time or else the FlatList wont update.
This is a react paradigm, don't mutate (so you don't introduce erros), create a new object alltogether.
