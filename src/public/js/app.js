Formio.createForm(document.getElementById('formio'), {
  components: [
    {
      type: 'select',
      key: 'title',
      label: 'Title',
      placeholder: 'Select a title',
      validate: {
        required: true
      },
      data: {
        values: [
          { label: 'Mr.', value: 'Mr.' },
          { label: 'Mrs.', value: 'Mrs.' },
          { label: 'Ms.', value: 'Ms.' },
          { label: 'Dr.', value: 'Dr.' },
          { label: 'Prof.', value: 'Prof.' }
        ]
      },
      input: true
    },
    {
      type: 'textfield',
      key: 'firstName',
      label: 'First Name',
      placeholder: 'Enter your first name',
      input: true
    },
    {
      type: 'textfield',
      key: 'lastName',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      validate: {
        required: true
      },
      input: true
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit',
      theme: 'primary'
    }
  ]
}).then(function(form) {
  form.on('submitButton', function(event) {
    event.preventDefault();
    
    const data = form.submission.data;
    
    const greeting = document.getElementById('greeting');
    greeting.innerHTML = `Hello, ${data.title} ${data.firstName || ''} ${data.lastName}`;
    greeting.classList.remove('hidden');
  });
}); 