runI:
	expo run:ios  --configuration Release

runA:
	expo run:android --variant release

buildapk:
	eas build --platform android --profile apk

buildapkS:
	eas build --platform android --profile apkStaging

buildA:
	eas build --platform android --profile production

buildAS:
	eas build --platform android --profile staging

buildI:
	eas build --platform ios --profile production

buildIS:
	eas build --platform ios --profile staging

buildIClear:
	eas build --platform ios --profile production --clear-cache

buildAI:
	eas build --platform all --profile production

iosSubmit:
	eas submit -p ios

andriodSubmit:
	eas submit -p andriod