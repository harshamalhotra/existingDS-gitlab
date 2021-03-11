<script>
export default {
  fields: [
    {
      key: 'first_name',
      label: 'First name',
      sortable: true,
    },
    {
      key: 'last_name',
      label: 'Last name',
      sortable: true,
    },
    {
      key: 'occupation',
      label: 'Occupation',
      sortable: true,
    },
    {
      key: 'age',
      label: 'Age',
      sortable: true,
    },
  ],
  items: [
    {
      first_name: 'Aron',
      last_name: 'Montez',
      occupation: 'Sales Representative',
      age: 36,
    },
    {
      first_name: 'Tamara',
      last_name: 'Felix',
      occupation: 'Marketing Director',
      age: 45,
    },
    {
      first_name: 'Emiko',
      last_name: 'Poulter',
      occupation: 'VP Operations',
      age: 54,
    },
    {
      first_name: 'Michael',
      last_name: 'Valentino',
      occupation: 'Field Coordinator',
      age: 42,
    },
    {
      first_name: 'Rachel',
      last_name: 'Feliciano',
      occupation: 'Software engineer',
      age: 29,
    },
  ],
};
</script>

<template>
  <gl-table :items="$options.items" :fields="$options.fields" />
</template>
