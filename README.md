# Qover Assignment

Qover Assignment is a test assignment provided by Qover to allow candidates showcase their automation skills.

## Dependencies

Before you can execute tests, please make sure the dependencies are installed. The dependencies are listed in the package.json file, so executing the commands below should do the trick (assuming you have npm installed):

```bash
npm install
```

Installing browser binaries:
```bash
npx playwright install
npx playwright install --edge
```

## Usage
To execute all checks on all browsers and devices listed in the configuration file:
```bash
npx playwright test
```
To execute one specific check, use the following command where `-g` is followed by the title of the test:
```
npx playwright test -g 'click the link "Complaint", check url and title, expect correct URL and title'
```


To see the report, use:
```bash
npx playwright show-report
```

## Usage
Additional test artifacts can be found in the `assignments artifacts` directory. Note that you can open `.mmap` file in the MindManager tool.

## Comments and feedback

Comments and feedback are welcome. 